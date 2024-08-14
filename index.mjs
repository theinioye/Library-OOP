    class LibraryItem {
        constructor ( title, author, itemID, isCheckedOut) {
            this.title = title 
            this.author = author
            this.itemID = itemID
            this.isCheckedOut = isCheckedOut
        }

        checkOut() {
            if (!this.isCheckedOut) {
                this.isCheckedOut = true
                console.log (` ${this.title} has been checked out 🫡  `)
            }
            else {
                console.log (`${this.title} has already been checked out and is unavailable. Please check back soon 🤕`)
            }
            }
    


         
       
        returnItem () { 
            if (this.isCheckedOut) {
                this.isCheckedOut = true
                console.log(`${this.title} has been returned `) 
            }
            else {
                console.log (`${this.title} has already been returned.`)
            }
        }

        

        getItemDetails() {
            console.log (`${this.title}, ${this.author}, ${this.itemID}, ${this.isCheckedOut}`)

         }

    }
        

    

const book1 = new LibraryItem (`Grimm's Tales`, `The Brothers Grimm`, `001`, false )

 
book1.returnItem()
book1.checkOut()


book1.getItemDetails()

    class Book extends LibraryItem { 
        constructor( title, author, itemID, isCheckedOut, ISBN, numPages){
            super( title, author, itemID, isCheckedOut)
            this.ISBN = ISBN
            this.numPages = numPages
        }
       

        getItemDetails() {
            console.log (`${this.title}, ${this.author}, ${this.itemID}, ${this.isCheckedOut}, ${this.ISBN}, ${this.numPages}`)

         }

    }

    const AON = new Book (`Anthills of The Savannah`, `Chinua Achebe`, `002`, true, 1234, 398 )


     AON.getItemDetails()

   class DVD extends LibraryItem {
    constructor ( title, author, itemID, isCheckedOut, director, runtime ) {
        super( title, author, itemID, isCheckedOut)
        this.director = director
        this.runtime = runtime
    }

    getItemDetails() {
        console.log (`Title : ${this.title}, ${this.author}, ${this.itemID}, ${this.isCheckedOut}, Director : ${this.director}, Runtime : ${this.runtime} minutes ` )
    }
   }


const Titanic = new DVD ( `Titanic`, `Leo Arthur`, `003`, true , `Greta Gerwig`, 90 )

Titanic.getItemDetails()

//    class LIbrary {
//     constructor ( name, items ){
//         this.name = name

//     }

//     addItem() {

//       }
//     removeItem(){

//        }

//     checkedOutItems(){

//        }

//     returnItem(){

//        }
//     listAvailable() {
        
//      }

//     listCheckedOut() {

//     }

//   }

   class Member {
    constructor ( name, memberId, checkedOutItems ) {
        this.name = name 
        this.memberId = memberId
        this.checkedOutItems = []

    }

    checkOutItem(itemName) { 
        this.checkedOutItems.push(itemName) 
        console.log( `Book ${itemName} has been checked out`)

     }

    returnItem (itemName) { 
        const index =this.checkedOutItems.indexOf (itemName)

        if (index !== -1 ) {
            this.checkedOutItems.splice(index,1)

            console.log ( `${itemName } has been returned successfully. `)
        }
        else { 
            console.log (`${itemName} is not in your checked out items.`)

        }

    }
    
    listCheckedOutItems() {
        console.log ( `Listing all checked out items `)

        this.checkedOutItems.forEach ((item, index) => {
            console.log ( `${index + 1 } . ${item}` )
        })
    
     }

}


const maryjane = new Member ( `Mary Jane`, 201 )

maryjane.checkOutItem(`Sability Platinum Vinyl`)
maryjane.checkOutItem(`One Love Sermon CD`)

maryjane.listCheckedOutItems()

maryjane.returnItem(`One Love Sermon CD`)

maryjane.returnItem(`Battle of the Bands Video Game`)

maryjane.listCheckedOutItems()


