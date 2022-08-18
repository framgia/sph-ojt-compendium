import { useState, useEffect } from "react";
import API from "../apis";

class Login {
    create() {
        return API.post("token/login");
    }
}
export default new Login();