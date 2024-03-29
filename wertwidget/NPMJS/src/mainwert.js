"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
alert(1);
var widget_initializer_1 = __importDefault(require("../NPMJS/node_modules/@wert-io/widget-initializer"));
var uuid_1 = require("../NPMJS/node_modules/uuid");
var bottom = document.createElement("button");
bottom.addEventListener("click", function () {
    var amount = document.getElementById("amount").value;
    console.log(amount);
    console.log(typeof (amount));
    openwert(amount);
});
bottom.innerText = "click now";
bottom.setAttribute("class", "btn btn-info");
document.body.appendChild(bottom);
function openwert(num) {
    //console.log("hello from func")
    var options = {
        partner_id: '01HJ3VMM454XKA737WAEQQEJV9',
        click_id: (0, uuid_1.v4)(), // unique id of purсhase in your system
        origin: 'https://sandbox.wert.io', // this option needed only in sandbox
        currency: 'USD',
        commodity: 'ETH',
        network: 'sepolia',
        currency_amount: num,
        commodities: JSON.stringify([
            {
                commodity: 'BTC',
                network: 'testnet',
            },
            {
                commodity: 'ETH',
                network: 'sepolia',
            },
        ]),
        listeners: {
            loaded: function () { return console.log('loaded'); },
        },
    };
    var wertWidget = new widget_initializer_1.default(options);
    wertWidget.open();
    console.log(options.click_id);
    document.getElementById("clickid").value = options.click_id;
    return options.click_id;
}
//# sourceMappingURL=mainwert.js.map