//document.getElementById("recent").innerHTML = "jajasi";

class Item {
    image;
    itemName;
    region;
    price;
    originalPrice;

    constructor(parent) {

        this.image = "img/itemImages/default.png";
        this.itemName = "Jumanji";
        this.region = "europe";
        this.price = "123";
        this.originalPrice = "3";

        this.generate(parent);
    }

    generate(parent) {
        let item = document.createElement("a");
        item.className = "defaultItem";
        parent.appendChild(item);

        let image = document.createElement("img");
        image.className = "itemImage";
        image.src = this.image;
        item.appendChild(image);

        let itemInfo = document.createElement("div");
        itemInfo.className = "itemInfo";
        item.appendChild(itemInfo);

        let itemTitle = document.createElement("div");
        itemTitle.innerHTML = this.itemName;
        itemInfo.appendChild(itemTitle);

        let itemText = document.createElement("div");
        itemText.className = "itemText";
        itemInfo.appendChild(itemText);

        let itemRegion = document.createElement("div");
        itemRegion.className = "itemRegion";
        itemRegion.innerHTML = this.region;
        itemText.appendChild(itemRegion);

        let div = document.createElement("div");
        itemText.appendChild(div);



        let itemPrice = document.createElement("div");
        itemPrice.className = "itemPrice";
        itemPrice.innerHTML = this.price + "€";
        div.appendChild(itemPrice);

        let itemDiscount = document.createElement("div");
        itemDiscount.className = "itemDiscount";
        itemDiscount.innerHTML = this.originalPrice + "€";
        div.appendChild(itemDiscount);








    }

}

var recentLaunch = Array();

const recentLaunchNumber = 7;

for (let i = 0; i < recentLaunchNumber; i++) {
    recentLaunch.push(new Item(document.getElementById("recent")));
}