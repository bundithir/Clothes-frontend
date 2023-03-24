import { FbIcon, GhIcon, IgIcon, TwIcon } from "./Icon";

const StyleH4 = 'font-bold text-xl mb-[2rem] capitalize'
const StyleList = 'hover:text-sky-600 cursor-pointer capitalize'
const FooterLayout = "w-[90%] mx-auto flex flex-col items-center justify-between text-white gap-[3.75rem] md:gap-[0] md:w-[75%]  md:items-start md:flex-row "

const Foot = () =>{
    return (
        <div className="bg-sky-900 py-[3rem] mt-[5rem]">
            <div className={FooterLayout}>
                <div>
                    <h4 className={StyleH4}>about</h4>
                    <ul className="flex flex-col gap-4">
                        <li className={StyleList}>Information</li>
                        <li className={StyleList}>store locator</li>
                        <li className={StyleList}>career</li>
                        <li className={StyleList}>sustainability</li>
                    </ul>
                </div>
                <div>
                    <h4 className={StyleH4}>help</h4>
                    <ul className="flex flex-col gap-4">
                        <li className={StyleList}>FAQ</li>
                        <li className={StyleList}>return policy</li>
                        <li className={StyleList}>privacy policy</li>
                        <li className={StyleList}>terms of use</li>
                        <li className={StyleList}>accessibility</li>
                    </ul>
                </div>
                <div>
                    <h4 className={StyleH4}>account</h4>
                    <ul className="flex flex-col gap-4">
                        <li className={StyleList}>membership</li>
                        <li className={StyleList}>profile</li>
                        <li className={StyleList}>coupons</li>
                    </ul>
                </div>
                <div>
                    <h4 className={StyleH4}>social account</h4>
                    <ul className="flex gap-4">
                        <li className="capitalize">
                            <a href="https://www.facebook.com/peet.bundit.71/" target='_blank'><FbIcon/></a>
                        </li>
                        <li className="capitalize">
                            <a href="https://github.com/bundithir" target='_blank'><GhIcon/></a>
                        </li>
                        <li className="capitalize">
                            <a href="https://www.instagram.com/peepi.p/" target='_blank'><IgIcon/></a>
                        </li>
                        <li className="capitalize">
                            <a href="https://twitter.com/peepi0615" target='_blank'><TwIcon/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Foot;