
// instance creation + mount
app = Vue.createApp({
    data: ()=>({
        books:books,
        isWishListOpened: true,
        wishList: []
    }),

    methods: {

        // add book to wish list
        addToWishList (book){ 
            this.wishList.push(book); 
        },

        // check book exist in the wish list
        isBookAdded(book){
            return this.wishList.find(b => b.id == book.id);
        },

        // remove bood from wish list
        removeFromWishList(book) {
            this.wishList.splice(this.wishList.findIndex(b => b.id === book.id), 1);
          }
          
        

    }
}).mount("#app");




