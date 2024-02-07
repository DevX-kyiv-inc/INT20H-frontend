export default function ProductForm() {
   const submit = (e) => {
      e.preventDefault();
   };
   return (
      <main>
         <form className="form">
            <label>
               <span>photo</span>
               <input type="file" />
            </label>
            <label className="product-name">
               <span>Product name</span>
               <input type="text" />
            </label>
            <label className="product-description">
               <span>Description</span>
               <input type="text" />
            </label>
            <label className="product-description">
               <span>Description</span>
               <input type="text" />
            </label>
         </form>
      </main>
   );
}
