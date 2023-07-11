import { ReactNode } from "react";
import { MdClose } from "react-icons/md";

interface Props {
    modal?: ReactNode,
    handleModal?: any,
    person?: any,
}

const AboutModal = ({ modal, handleModal, person, ...props }: Props) => {
    return (
        <div className="min-h-[100vh] w-full flex justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none bg-[#00000059] ">
            <div className="relative w-[60%] h-[100vh] top-[50px]  my-2 4xs:mx-2 sm:mx-12">
                <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div>
                        <div className="flex flex-row-reverse pr-4 pt-4 text-[28px]">
                            <MdClose onClick={() => handleModal(!modal)} className="cursor-pointer" />
                        </div>

                        <div className="flex flex-col p-12" >
                            <h1 className="text-[28px] mb-2" {...props}>{person.name}</h1>
                            <h3 className="text-[18px] mb-2">{person.position}</h3>
                            <hr />

                            <p className="text-sm sm:text-[17px] mt-2 leading-10">{person.bio}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutModal;