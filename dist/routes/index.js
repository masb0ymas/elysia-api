import { memoryUsage } from "bun:jsc";
import Elysia from "elysia";
import v1Route from "./api/v1.js";
import axios from "axios";
const app = new Elysia();
app.get("/", () => {
    return { message: "Hello Elysia" };
});
app.get("/health", () => {
    return { status: "ok", cpu: process.cpuUsage(), memoryUsage: memoryUsage() };
});
app.group("/v1", (group) => {
    return group.use(v1Route);
});
app.get("/payment", async () => {
    const url = "https://sandbox.merchant.razer.com/RMS/API/Recurring/input_v7.php";
    const hasher = new Bun.CryptoHasher("md5");
    const record_type = "T";
    const merchant_id = "SB_AllyFitness";
    const sub_merchant_id = "SB_AllyFitness";
    const cc_or_token = "4966230349668855";
    const orderid = "DEMO123";
    const currency = "MYR";
    const verify_key = "917bea1af8497fa7464e11cf007490cd";
    const amount = 20;
    const bill_name = "User Ally";
    const bill_email = "demo@mail.com";
    const bill_mobile = "812512231";
    const bill_desc = "Buy some product";
    const customer_id = "customer_123";
    const checksum_text = [
        record_type,
        merchant_id,
        sub_merchant_id,
        cc_or_token,
        orderid,
        currency,
        amount,
        verify_key,
    ].join("");
    hasher.update(checksum_text);
    const checksum = hasher.digest("hex");
    console.log({ checksum });
    const arrForm = [
        record_type,
        merchant_id,
        sub_merchant_id,
        cc_or_token,
        orderid,
        currency,
        amount,
        bill_name,
        bill_email,
        bill_mobile,
        bill_desc,
        checksum,
        customer_id,
    ].join("|");
    console.log({ arrForm });
    const formData = [arrForm];
    console.log({ formData });
    const res = await axios.postForm(url, formData);
    console.log(res.data);
    return { message: "Oke", data: res.data };
});
const route = app;
export default route;
