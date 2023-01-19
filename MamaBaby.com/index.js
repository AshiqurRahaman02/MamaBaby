
    
    let data=[
        {
        img: "https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.27b/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw0f094690/productimages/1M219710.jpg?sw=800&sh=1000&sfrm=jpg&yocs=4E_4G_",
        offerprice: "12.99",
        price: "$32.99" ,
        name: "Baby Characters 2-Way Zip Cotton Sleep Play",
        companyname: "Mamababy | Baby",
        id: "1"
        },
        {
            img: "https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.27b/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwcea2cd12/productimages/1N957510.jpg?sw=800&sh=1000&sfrm=jpg&yocs=4E_4G_",
        offerprice: "12.99",
        price: "$38.99" ,
        name: "Baby 3-Piece Floral Little Jacket Set",
        companyname: "Mamababy | Baby",
        id: "2"
        },
        {
            img: "https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.27b/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwdc887b95/productimages/CF22G01H.jpg?sw=800&sh=1000&sfrm=jpg&yocs=4E_4G_",
        offerprice: "15.99",
        price: "$38.99" ,
        name: "Toddler Mamababy Slip-On Sneakers",
        companyname: "Mamababy | Baby",
        id: "3"
        },
        {
            img: "https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.27b/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw1c781107/productimages/1N982410.jpg?sw=800&sh=1000&sfrm=jpg&yocs=4E_4G_",
        offerprice: "4.99",
        price: "$30.99" ,
        name: "Baby Grandpa Collectible Bodysuit",
        companyname: "Mamababy | Baby",
        id: "4"
        },
        {
            img: "https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.27b/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwff759d26/productimages/CS22R07H.jpg?sw=800&sh=1000&sfrm=jpg&yocs=4E_4G_",
        offerprice: "16.99",
        price: "$34.99" ,
        name: "Toddler Mamababy Daisy Recycled Shoes",
        companyname: "Mamababy | Baby",
        id: "5"
        }

    ]
    
        // Get the container element
        const container = document.querySelector('.slideshow-container');
        var c = 0;
        // Loop through the data and create HTML elements for each item
        for(let item of data){
        
            if(c<5){
                // Create a div element for the item
            let  itemDiv = document.createElement('div');
            
            
            let img=document.createElement("img")
            let offer=document.createElement("h2")
            let price=document.createElement("p")
            let img2=document.createElement("img")
            let name=document.createElement("h3")
            let compani=document.createElement("h4")
            let img3=document.createElement("img")

            // console.log(item)
            img.setAttribute("src",item.img)
            offer.innerText=item.offerprice
            price.innerText=item.price
            img2.setAttribute("src","./image/favorite_FILL0_wght400_GRAD0_opsz48.svg")
            name.innerText=item.name
            compani.innerText=item.companyname
            img3.setAttribute("src","./image/shopping_cart_FILL0_wght400_GRAD0_opsz20.svg")

            img3.addEventListener("click",()=>{
                let cart = JSON.parse(localStorage.getItem("cart"))
                if(cart==null){
                cart=[]
                }


                let  existingProduct = cart.find(p => p.id === item.id);
                if (existingProduct) {
                    existingProduct.quantity += 1;
                } else {
                    // Add a new product to the cart
                    cart.push({ ...item, quantity: 1 });
                }
                localStorage.setItem('cart', JSON.stringify(cart));
                console.log(JSON.parse(localStorage.getItem("cart")))
            })

            img2.addEventListener("click",()=>{
                let fav = JSON.parse(localStorage.getItem("fav"))
                if(fav==null){
                    fav=[]
                }


                
                    // Add a new product to the fav
                    fav.push({ ...item});
                localStorage.setItem('fav', JSON.stringify(fav));
                console.log(JSON.parse(localStorage.getItem("fav")))
            })



            itemDiv.append(img,offer,price,img2,name,compani,img3)
            container.append(itemDiv)
            c++
            }
            
        
        };
        const container2 = document.querySelector('.slideshow-container2');
        let s=0
        for(let i=data.length-1;i>=0;i--){
            let item=data[i]
            if(s<5){
                // Create a div element for the item
            let  itemDiv = document.createElement('div');
            
            
            let img=document.createElement("img")
            let offer=document.createElement("h2")
            let price=document.createElement("p")
            let img2=document.createElement("img")

            let name=document.createElement("h3")
            let compani=document.createElement("h4")
            let img3=document.createElement("img")


            // console.log(item)
            img.setAttribute("src",item.img)
            offer.innerText=item.offerprice
            price.innerText=item.price
            img2.setAttribute("src","./image/favorite_FILL0_wght400_GRAD0_opsz48.svg")

            name.innerText=item.name
            compani.innerText=item.companyname
            img3.setAttribute("src","./image/shopping_cart_FILL0_wght400_GRAD0_opsz20.svg")

            img3.addEventListener("click",()=>{
                let cart = JSON.parse(localStorage.getItem("cart"))
                if(cart==null){
                cart=[]
                }


                let  existingProduct = cart.find(p => p.id === item.id);
                if (existingProduct) {
                    existingProduct.quantity += 1;
                } else {
                    // Add a new product to the cart
                    cart.push({ ...item, quantity: 1 });
                }
                localStorage.setItem('cart', JSON.stringify(cart));
                console.log(JSON.parse(localStorage.getItem("cart")))
            })

            img2.addEventListener("click",()=>{
                let fav = JSON.parse(localStorage.getItem("fav"))
                if(fav==null){
                    fav=[]
                }

                let  existingProduct = fav.find(p => p.id === item.id);
                
                    // Add a new product to the fav
                if(!existingProduct){
                    fav.push({ ...item});
                }
                localStorage.setItem('fav', JSON.stringify(fav));
                console.log(JSON.parse(localStorage.getItem("fav")))
            })







            itemDiv.append(img,offer,price,img2,name,compani,img3)
            container2.append(itemDiv)
            s++
            }
        }



        let Conditions=JSON.parse(localStorage.getItem("Conditions"))
        let name=document.getElementById("name")
        let n=Conditions[0].name
        name.innerHTML=`<a href='./Account.html'>${n}</a>`;

