"use strict";
/*
 * @Description:
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-02-11 12:45:04
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-27 11:27:45
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpRequest = void 0;
class HttpRequest {
    static get(url, timeout = 1000 * 30) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const controller = new AbortController();
                const id = setTimeout(() => controller.abort(), timeout);
                const response = yield fetch(url, { signal: controller.signal });
                clearTimeout(id);
                if (response.ok) {
                    const json = yield response.json();
                    return json;
                }
            }
            catch (error) {
                console.log(error);
            }
            return null;
        });
    }
    static post(url, data, timeout = 1000 * 30) {
        return __awaiter(this, void 0, void 0, function* () {
            const controller = new AbortController();
            const id = setTimeout(() => controller.abort(), timeout);
            try {
                const response = yield fetch(url, {
                    method: "POST",
                    signal: controller.signal,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });
                if (response.ok) {
                    const json = yield response.json();
                    return json;
                }
            }
            catch (error) {
                console.log(error);
            }
            finally {
                clearTimeout(id);
            }
            return null;
        });
    }
}
exports.HttpRequest = HttpRequest;
//# sourceMappingURL=httpRequest.js.map