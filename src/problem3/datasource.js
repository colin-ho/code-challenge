// your code here:
class DataSource {

    /*
    getPrices returns a Promise which provides fulfilment handler 
    with an array of prices retrieved from a remote pricing engine.
    Each item in the array is a price object in the form:
    {
        buy: Number
        sell: Number
        id: Number
        pair: String
        timestamp: Date
        mid: ()=> Number , returns the mid-point value between price.buy and price.sell
        quote: ()=> String , returns the quote currency (counter currency) of the trade pair, 
        e.g. for ETHSGD pair the quote currency is SGD.
    }
    */
    getPrices() {
        return new Promise(async (resolve, reject) => {
            try {
                let arr = [];
                const response = await fetch('https://static.ngnrs.io/test/prices')
                const data = await response.json()
                data.data.prices.forEach(price => {
                    arr.push({
                        ...price,
                        mid: function () {
                            return ((this.buy - this.sell) / 2 + this.sell) / 100
                        },
                        quote: function () {
                            return this.pair.slice(this.pair.length - 3)
                        }
                    })
                })
                resolve(arr)
            } catch (err) {
                reject(err)
            }
        })
    }
}


//Test code

const ds = new DataSource()

ds.getPrices()
    .then(prices => {
        prices.forEach(price => {
            console.log(`Mid price for ${price.pair} is ${price.mid()} ${price.quote()}.`);
        });
    }).catch(error => {
        console.error(error);
    });
