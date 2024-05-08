'use client'
import Image from "next/image";
import style from "./style.module.css";
import SearchBar from "@/components/SearchBar";
import { useContext, useEffect, useState } from "react";
import { CourseActionsContext } from "@/providers/CourseProvider/context";
import CourseCard from "@/components/CourseCard";

export default function FacultyCourses(): React.ReactNode {
   

    return (
        <div className={style.container}>
                <div className={style.courses}>
                    <CourseCard/>
                </div>
        </div>
    );
}
