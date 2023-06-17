import { useEffect, useState } from "react";
import './Popular_classes.css'
import { Zoom } from "react-awesome-reveal";

const Popular_classes = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch("https://deep-thought-server-sagar-ghosh1.vercel.app/classes")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setClasses(data)
            })
    }, [])

    return (
        <div className="py-20 px-5 popular_class">
            <div className="max-w-[1140px] mx-auto">
                <Zoom>
                    <h4 className="text-center headings text-[28px] font-extrabold">Popular Class Section</h4>
                </Zoom>
                <div className="w-[120px] h-[3px] divider mx-auto my-6"></div>

                <div className="grid lg:grid-cols-3 grid-cols-1 gap-7">
                    {
                        classes.slice(0, 6).map(teacher =>
                            <div key={teacher.name} className="p-5 rounded-md main-card ">
                                <div className="mb-5">
                                    <img src={teacher.image} alt="" className="w-full h-[340px] object-cover rounded-md" />
                                </div>
                                <h3 className="text-[#141414] font-semibold text-[18px] mb-4">Instructor Name: {teacher.instructor}</h3>
                                <h5 className="text-[#141414] font-semibold text-[16px]">Dancer: {teacher.name} Dance</h5>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Popular_classes;