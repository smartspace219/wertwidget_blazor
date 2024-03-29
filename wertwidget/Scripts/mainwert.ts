alert(1)
import WertWidget from '../NPMJS/node_modules/@wert-io/widget-initializer';
import type { Options } from '../NPMJS/node_modules/@wert-io/widget-initializer/types';
import { v4 as uuidv4 } from '../NPMJS/node_modules/uuid';

let bottom = document.createElement("button");
bottom.addEventListener("click", function () {
    let amount = (<HTMLInputElement>document.getElementById("amount")).value;
    console.log(amount);
    console.log(typeof(amount));
    openwert(amount)
});
bottom.innerText = "click now";
bottom.setAttribute("class", "btn btn-info");

document.body.appendChild(bottom);

function openwert(num) {
    //console.log("hello from func")
    const options: Options = {
        partner_id: '01HJ3VMM454XKA737WAEQQEJV9',
        click_id: uuidv4(), // unique id of purсhase in your system
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
            loaded: () => console.log('loaded'),
        },
    };
    const wertWidget = new WertWidget(options);
    wertWidget.open();
    console.log(options.click_id);
    (<HTMLInputElement>document.getElementById("clickid")).value = options.click_id;
    return options.click_id;
}





