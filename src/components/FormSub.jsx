function FormSub(){
    return(
        <section className="m-5 bg-white rounded-xl h-105">  
            <form className="m-5 flex flex-col items-center gap-3.5">
                <input className=" w-85 h-13 pl-5 border-stone-200 font-semibold border-2 rounded-sm" type="text" placeholder="First Name"/>
                <input className=" w-85 h-13 pl-5 border-stone-200 font-semibold border-2 rounded-sm" type="text" placeholder="Last Name"/>
                <input className=" w-85 h-13 pl-5 border-stone-200 font-semibold border-2 rounded-sm" type="text" placeholder="Email Address"/>
                <input className=" w-85 h-13 pl-5 border-stone-200 font-semibold border-2 rounded-sm" type="text" placeholder="Password"/>
                <input className="uppercase text-sm w-85 h-12 pl-5 bg-green-600 shadow text-white border-stone-100 font-semibold border-2 rounded-sm" type="submit" value="Claim your free trial"/>
            </form>

            <p className="text-[11px] mx-12 m text-stone-400">Lorem ipsum dolor, sit amet consectetur amet felidiad final. <a href=""></a> <span className="text-red-500">Terms and Services. </span></p>
        </section>
    );
}
export default FormSub;