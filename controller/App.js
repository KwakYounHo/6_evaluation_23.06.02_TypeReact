"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "..", "bundle", "index.html"));
});
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "bundle")));
app.listen(8080, () => {
    console.log('8080포트에서 서버 실행 중');
});
