import { quickLinks, settingMenu } from "../utils/Constants";

const Footer = () => {
    return (
        
        <footer>
            <div className="flex py-[10px] md:px-[30px]
            border-b-4  ">
                <span className="text-[#70767a] leading-none ">India
                </span>

            </div>
            
            <div className="flex flex-col md:flex-row justify-between py-3 md:py-0 md:px-[15px] ">
                <div className="flex justify-center">
                    {quickLinks.map((el, i) => (
                        <span
                            key={i}
                            className="text-[#70757a] text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px]"
                        >
                            {el}
                        </span>
                    ))}
                </div>

                <div className="flex justify-center">
                    {settingMenu.map((el, i) => (
                        <span
                            key={i}
                            className="text-[#70757a] text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px]"
                        >
                            {el}
                        </span>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
