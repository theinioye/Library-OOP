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

   class LIbrary {
    constructor ( name ){
        this.name = name
        this.items = []
        this.checkedOutItems = {}
   

    }

    addItem(itemName) { 
        this.items.push(itemName)
        console.log ( `This item " ${itemName} has been successfully added to Library " ` )


      }

    removeItem(itemName){ 
        const index = this.items.indexOf(itemName)
        if (index !== -1) {
            this.items.splice(index, 1 )
            console.log (`This item "${itemName}" has been removed from the library `)
        } else {
            console.log ( `This item "${itemName}" does not exist in the library and so cannot be removed.`)
        }

       }

    checkOutItem(itemName, member){
        const index = this.items.indexOf(itemName)
        if (index != -1 ) {
            this.items.splice(index, 1 )
            this.checkedOutItems[itemName] = member
            console.log ( ` "${itemName}" sucessfully checked out by ${member}`)
             } else { 
            if (this.checkedOutItems[itemName]) {
                console.log ( ` This ""${itemName}" has already been checked out by ${this.checkedOutItems[itemName]} and is currently unavailable. Pleasae check back soon. `)
            } else {
            console.log ( ` This item "${itemName}" does not exist in the library.` )
        }
     }
    }
    



    returnItem(itemName, member){
        if (this.checkedOutItems[itemName] === member) {
            this.items.push(itemName)
            delete  this.checkedOutItems[itemName]
            console.log(` "${itemName}" has been successfully returned by ${member}`)
        } else { 
            console.log (` "${itemName}" was not checked out by ${member}`)
        }
    }

    
    listAvailable() {
        console.log (` Listing all available books in the Library`)

        this.items.forEach((item, index) => {
            console.log ( `${index + 1 }. ${item}`)

        })
        
     }

    listCheckedOut() { 
        console.log ( `Listing all checked out library items`)
        for ( const [item, member] of Object.entries(this.checkedOutItems)) {
            console.log (`"${item}" checked out by ${member}.`)
        }

    }

  }

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

const oluyolePublicLibrary = new LIbrary (`Oluyole Public Library`)
oluyolePublicLibrary.addItem(`Mr Bean's Tales`)
oluyolePublicLibrary.addItem(`Mr Bean's Triumphs`)
oluyolePublicLibrary.addItem(`Mr Bean's Troubles`)
oluyolePublicLibrary.addItem(`Mr Bean's Teasers`)
oluyolePublicLibrary.addItem(`Mr Bean's Adventures`)
oluyolePublicLibrary.addItem(`Mr Bean and Friends`)
oluyolePublicLibrary.addItem(`Mr Bean; The Sequel`)


oluyolePublicLibrary.checkOutItem(`Mr Bean's Troubles`, `Ini`)
oluyolePublicLibrary.checkOutItem(`Mr Bean's Adventures`,`Ini`)
oluyolePublicLibrary.checkOutItem(`Mr Bean's Troubles`, `Phillip`)
oluyolePublicLibrary.checkOutItem(`Mr Bean and Friends`, `Eniola`)
oluyolePublicLibrary.returnItem(`Mr Bean; The Sequel`, `Emmanuel`)
oluyolePublicLibrary.returnItem(`Mr Bean's Troubles`, `Faithia`)
oluyolePublicLibrary.returnItem(`Mr Bean's Troubles`, `Ini`)
oluyolePublicLibrary.checkOutItem(`Mr Bean's Troubles`, `Phillip`)
oluyolePublicLibrary.listAvailable()
oluyolePublicLibrary.listCheckedOut()


