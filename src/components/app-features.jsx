const Features = () =>{
    return(
        <div className="mx-auto py-[3rem]">
            <p className="text-4xl font-bold uppercase mb-[2rem]">app benefits</p>
            <div className="grid grid-cols md:grid-cols-3 items-center border-y">
                <div className="grid grid-cols-2 items-center justify-center py-[2rem]">
                    <img src="/images/1000x500.gif" alt="Click & Collect" />
                    <div className="ml-4">
                        <p className="text-lg uppercase font-bold">Click & Collect</p>
                        <p className="text-sm">ฟรีค่าบรรจุภัณฑ์ เมื่อเลือกบริการ Click & Collect ช้อปออนไลน์ รับสินค้าที่ร้านสาขา</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center justify-center py-[2rem] border-y md:border-y-0 md:border-x">
                    <img src="/images/1000x500.gif" alt="Extra sizes"/>
                    <div className="ml-4">
                        <p className="text-lg uppercase font-bold">Extra sizes from XS-3XL</p>
                        <p className="text-sm">ไซส์พิเศษตั้งแต่ XS - 3XL มากที่สุดบนออนไลน์สโตร์</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center justify-center py-[2rem]">
                    <img src="/images/1000x500.gif" alt="ORDER TO ME"/>
                    <div className="ml-4">
                        <p className="text-lg uppercase font-bold">ORDER TO ME</p>
                        <p className="text-sm">เราพร้อมช่วยเหลือคุณ หากคุณหาสินค้าที่คุณต้องการที่ร้านสาขาไม่พบ สามารถแจ้งพนักงานให้ช่วยช้อปบนออนไลน์ได้เลย</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;