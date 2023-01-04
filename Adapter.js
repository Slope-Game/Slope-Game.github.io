window.Adapter = (function (exports) {
    class Matrix {
        constructor(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0, nums = 0) {
            this._bTransform = false;
            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
            this.tx = tx;
            this.ty = ty;
            this._checkTransform();
        }
        identity() {
            this.a = this.d = 1;
            this.b = this.tx = this.ty = this.c = 0;
            this._bTransform = false;
            return this;
        }
        _checkTransform() {
            return this._bTransform = (this.a !== 1 || this.b !== 0 || this.c !== 0 || this.d !== 1);
        }
        setTranslate(x, y) {
            this.tx = x;
            this.ty = y;
            return this;
        }
        translate(x, y) {
            this.tx += x;
            this.ty += y;
            return this;
        }
        scale(x, y) {
            this.a *= x;
            this.d *= y;
            this.c *= x;
            this.b *= y;
            this.tx *= x;
            this.ty *= y;
            this._bTransform = true;
            return this;
        }
        rotate(angle) {
            var cos = Math.cos(angle);
            var sin = Math.sin(angle);
            var a1 = this.a;
            var c1 = this.c;
            var tx1 = this.tx;
            this.a = a1 * cos - this.b * sin;
            this.b = a1 * sin + this.b * cos;
            this.c = c1 * cos - this.d * sin;
            this.d = c1 * sin + this.d * cos;
            this.tx = tx1 * cos - this.ty * sin;
            this.ty = tx1 * sin + this.ty * cos;
            this._bTransform = true;
            return this;
        }
        skew(x, y) {
            var tanX = Math.tan(x);
            var tanY = Math.tan(y);
            var a1 = this.a;
            var b1 = this.b;
            this.a += tanY * this.c;
            this.b += tanY * this.d;
            this.c += tanX * a1;
            this.d += tanX * b1;
            return this;
        }
        invertTransformPoint(out) {
            var a1 = this.a;
            var b1 = this.b;
            var c1 = this.c;
            var d1 = this.d;
            var tx1 = this.tx;
            var n = a1 * d1 - b1 * c1;
            var a2 = d1 / n;
            var b2 = -b1 / n;
            var c2 = -c1 / n;
            var d2 = a1 / n;
            var tx2 = (c1 * this.ty - d1 * tx1) / n;
            var ty2 = -(a1 * this.ty - b1 * tx1) / n;
            return out.setTo(a2 * out.x + c2 * out.y + tx2, b2 * out.x + d2 * out.y + ty2);
        }
        transformPoint(out) {
            return out.setTo(this.a * out.x + this.c * out.y + this.tx, this.b * out.x + this.d * out.y + this.ty);
        }
        transformPointN(out) {
            return out.setTo(this.a * out.x + this.c * out.y, this.b * out.x + this.d * out.y);
        }
        getScaleX() {
            return this.b === 0 ? this.a : Math.sqrt(this.a * this.a + this.b * this.b);
        }
        getScaleY() {
            return this.c === 0 ? this.d : Math.sqrt(this.c * this.c + this.d * this.d);
        }
        invert() {
            var a1 = this.a;
            var b1 = this.b;
            var c1 = this.c;
            var d1 = this.d;
            var tx1 = this.tx;
            var n = a1 * d1 - b1 * c1;
            this.a = d1 / n;
            this.b = -b1 / n;
            this.c = -c1 / n;
            this.d = a1 / n;
            this.tx = (c1 * this.ty - d1 * tx1) / n;
            this.ty = -(a1 * this.ty - b1 * tx1) / n;
            return this;
        }
        setTo(a, b, c, d, tx, ty) {
            this.a = a, this.b = b, this.c = c, this.d = d, this.tx = tx, this.ty = ty;
            return this;
        }
        concat(matrix) {
            var a = this.a;
            var c = this.c;
            var tx = this.tx;
            this.a = a * matrix.a + this.b * matrix.c;
            this.b = a * matrix.b + this.b * matrix.d;
            this.c = c * matrix.a + this.d * matrix.c;
            this.d = c * matrix.b + this.d * matrix.d;
            this.tx = tx * matrix.a + this.ty * matrix.c + matrix.tx;
            this.ty = tx * matrix.b + this.ty * matrix.d + matrix.ty;
            return this;
        }
        static mul(m1, m2, out) {
            var aa = m1.a, ab = m1.b, ac = m1.c, ad = m1.d, atx = m1.tx, aty = m1.ty;
            var ba = m2.a, bb = m2.b, bc = m2.c, bd = m2.d, btx = m2.tx, bty = m2.ty;
            if (bb !== 0 || bc !== 0) {
                out.a = aa * ba + ab * bc;
                out.b = aa * bb + ab * bd;
                out.c = ac * ba + ad * bc;
                out.d = ac * bb + ad * bd;
                out.tx = ba * atx + bc * aty + btx;
                out.ty = bb * atx + bd * aty + bty;
            }
            else {
                out.a = aa * ba;
                out.b = ab * bd;
                out.c = ac * ba;
                out.d = ad * bd;
                out.tx = ba * atx + btx;
                out.ty = bd * aty + bty;
            }
            return out;
        }
        static mul16(m1, m2, out) {
            var aa = m1.a, ab = m1.b, ac = m1.c, ad = m1.d, atx = m1.tx, aty = m1.ty;
            var ba = m2.a, bb = m2.b, bc = m2.c, bd = m2.d, btx = m2.tx, bty = m2.ty;
            if (bb !== 0 || bc !== 0) {
                out[0] = aa * ba + ab * bc;
                out[1] = aa * bb + ab * bd;
                out[4] = ac * ba + ad * bc;
                out[5] = ac * bb + ad * bd;
                out[12] = ba * atx + bc * aty + btx;
                out[13] = bb * atx + bd * aty + bty;
            }
            else {
                out[0] = aa * ba;
                out[1] = ab * bd;
                out[4] = ac * ba;
                out[5] = ad * bd;
                out[12] = ba * atx + btx;
                out[13] = bd * aty + bty;
            }
            return out;
        }
        scaleEx(x, y) {
            var ba = this.a, bb = this.b, bc = this.c, bd = this.d;
            if (bb !== 0 || bc !== 0) {
                this.a = x * ba;
                this.b = x * bb;
                this.c = y * bc;
                this.d = y * bd;
            }
            else {
                this.a = x * ba;
                this.b = 0 * bd;
                this.c = 0 * ba;
                this.d = y * bd;
            }
            this._bTransform = true;
        }
        rotateEx(angle) {
            var cos = Math.cos(angle);
            var sin = Math.sin(angle);
            var ba = this.a, bb = this.b, bc = this.c, bd = this.d;
            if (bb !== 0 || bc !== 0) {
                this.a = cos * ba + sin * bc;
                this.b = cos * bb + sin * bd;
                this.c = -sin * ba + cos * bc;
                this.d = -sin * bb + cos * bd;
            }
            else {
                this.a = cos * ba;
                this.b = sin * bd;
                this.c = -sin * ba;
                this.d = cos * bd;
            }
            this._bTransform = true;
        }
        clone() {
            var dec = Matrix.create();
            dec.a = this.a;
            dec.b = this.b;
            dec.c = this.c;
            dec.d = this.d;
            dec.tx = this.tx;
            dec.ty = this.ty;
            dec._bTransform = this._bTransform;
            return dec;
        }
        copyTo(dec) {
            dec.a = this.a;
            dec.b = this.b;
            dec.c = this.c;
            dec.d = this.d;
            dec.tx = this.tx;
            dec.ty = this.ty;
            dec._bTransform = this._bTransform;
            return dec;
        }
        toString() {
            return this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.tx + "," + this.ty;
        }
        destroy() {
            this.recover();
        }
        recover() {
            Pool.recover("Matrix", this.identity());
        }
        static create() {
            return Pool.getItemByClass("Matrix", Matrix);
        }
    }


    class Adapter {
        constructor() {
            this.matrix = new Matrix();
            this.offset = { x: 0, y: 0 };
            this.safariOffsetY = 0;
            this.previousOrientation = 0;
            this.scaleX = 1;
            this.scaleY = 1;

        }

        init(designWidth, designHeight) {

            this.container = document.getElementById("unityContainer");
            // console.log(this.container);
            this.designWidth = designWidth;
            this.designHeight = designHeight;
            this.onSafari = window.navigator.userAgent.indexOf("Safari") > -1;
            this.onMobile = window.navigator.userAgent.indexOf("Mobile") > -1;
            window.addEventListener("resize", () => {
                var orientation = window.orientation;
                this.previousOrientation = orientation;
                if (this.onSafari)
                    this.safariOffsetY = (window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight) - window.innerHeight;
                this.resetCanvas();
            });
            window.addEventListener("orientationchange", (e) => {
                this.resetCanvas();
            });
            setTimeout(() => {
                this.resetCanvas();
            }, 0.05e3);

        }

        formatData(value) {
            if (Math.abs(value) < 0.000001)
                return 0;
            if (Math.abs(1 - value) < 0.001)
                return value > 0 ? 1 : -1;
            return value;
        }

        get clientWidth() {

            return window.innerWidth || document.body.clientWidth;
        }
        get clientHeight() {
            return window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight;
        }


        resetCanvas() {
            var rotation = false;
            var pixelRatio = 1;



            console.log("pixelRatio", pixelRatio)

            var screenWidth = this.clientWidth * pixelRatio;
            var screenHeight = this.clientHeight * pixelRatio;
            this.canvasRotation = rotation;
            var mat = this.matrix.identity();
            var scaleX = screenWidth / this.designWidth;
            var scaleY = screenHeight / this.designHeight;
            var canvasWidth = this.designWidth;
            var canvasHeight = this.designHeight;
            var realWidth = screenWidth;
            var realHeight = screenHeight;
            var canvasStyle = this.container.style;

            scaleX = scaleY = Math.min(scaleX, scaleY);
            canvasWidth = realWidth = Math.round(this.designWidth * scaleX);
            canvasHeight = realHeight = Math.round(this.designHeight * scaleY);

            // mat.scale(realWidth / canvasWidth / pixelRatio, realHeight / canvasHeight / pixelRatio);
            this.offset.x = (screenWidth - realWidth) * 0.5 / pixelRatio;
            this.offset.y = (screenHeight - realHeight) * 0.5 / pixelRatio;
            
            this.offset.x = Math.round(this.offset.x);
            this.offset.y = Math.round(this.offset.y);
            mat.translate(this.offset.x, this.offset.y);
            if (this.safariOffsetY)
                mat.translate(0, this.safariOffsetY);

            mat.a = this.formatData(mat.a);
            mat.d = this.formatData(mat.d);
            mat.tx = this.formatData(mat.tx);
            mat.ty = this.formatData(mat.ty);


            canvasStyle.transformOrigin = canvasStyle.msTransformOrigin = canvasStyle.mozTransformOrigin = canvasStyle.oTransformOrigin = "0px 0px 0px";
            canvasStyle.transform = canvasStyle.msTransform = canvasStyle.mozTransform = canvasStyle.oTransform = "matrix(" + mat.toString() + ")";
            canvasStyle.width = canvasWidth + "px";
            canvasStyle.height = canvasHeight + "px";


            if (this.safariOffsetY)
                mat.translate(0, -this.safariOffsetY);
            mat.translate(parseInt(canvasStyle.left) || 0, parseInt(canvasStyle.top) || 0);




            // const logo = document.getElementById("logo");
            // const thumbnail = document.getElementById("thumbnail");
            // const bestgames = document.getElementById("bestgames");
            // const progress = document.getElementById("progress");
            // const loadingView = document.getElementById("LoadingView");

            // loadingView.style.width = canvasWidth / pixelRatio + "px";
            // loadingView.style.height = canvasHeight / pixelRatio + "px";

            // logo.width = logo.designWidth * scaleX / pixelRatio;
            // logo.height = logo.designHeight * scaleY / pixelRatio;

            // thumbnail.width = thumbnail.designWidth * scaleX / pixelRatio;
            // thumbnail.height = thumbnail.designHeight * scaleY / pixelRatio;

            // bestgames.width = bestgames.designWidth * scaleX / pixelRatio;
            // bestgames.height = bestgames.designHeight * scaleY / pixelRatio;
            // progress.style.fontSize = 40 * scaleX / pixelRatio + "px";
        }
    }
    return new Adapter();
}({}));