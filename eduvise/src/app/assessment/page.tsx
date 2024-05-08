'use client'
import { useContext, useEffect, useReducer, useState } from "react";
import style from "./style.module.css";
import { useRouter } from 'next/navigation';
import { QuestionActionsContext } from "@/providers/QuestionProvider/context";
import { useQuestionState } from "@/providers/QuestionProvider";
import { AnswerActionsContext } from "@/providers/ResponseProvider/context";
import { useAnswerState } from "@/providers/ResponseProvider";
import { Answer } from "@/providers/ResponseProvider/interface";
import { useFacultyActions, useFacultyState } from "@/providers/FacultyProvider";
import { FacultyActionTypes } from "@/providers/FacultyProvider/action";
import { FacultyActionsContext, FacultyStateContextInitial } from "@/providers/FacultyProvider/context";
import facultyReducer from "@/providers/FacultyProvider/reducer";
import { Progress } from "antd";
import SideNav from "@/components/SideNav";
import { useStyles } from "./style";


const answer_options = {
    "Agree": 3,
    "Slightly Agree": 2,
    "Slightly Disagree": 1,
    "Disagree": 0
};

const answer : Answer = {
    CriticalThinking: 0,
    ProblemSolving: 0,
    EffectiveCommunication: 0,
    HealthcareProficiency: 0,
    InstructionalDesign: 0,
    LegalReasoning: 0,
    Leadership: 0,
    EnvironmentalSustainability:0
}

export default function Assessment() {
    const { GetAllQuestions } = useContext(QuestionActionsContext);
    const { AddLearnerAnswer} = useContext(AnswerActionsContext);
    const { questions } = useQuestionState();
    const { GetFacultyBySkills } = useContext(FacultyActionsContext);
    const [state, dispatch] = useReducer(facultyReducer, FacultyStateContextInitial);
    //const { skills } = useAnswerState();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Index of the current question
    const [answers, setanswers] = useState({ ...answer });
    const router = useRouter(); // Initialize router
    const { styles, cx } = useStyles();

    // Fetch questions when the component mounts
    useEffect(() => {
        try {
            GetAllQuestions();
        } catch (error) {
            console.error('Error fetching all questions:', error);
        }
    }, []);

    // Function to handle selection of an answer
    const handleSelectanswer = (skillLevel:string) => {
    
        updateSkills(skillLevel, currentQuestion?.skill)
        // Move to the next question or redirect to result page if it's the last question
        if (questions && currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        } else if (questions && currentQuestionIndex === questions.length - 1) {

            
            AddLearnerAnswer(answers);
            GetFacultyBySkills(answers);
            
            router.push('/results');
        }
    };
    const updateSkills = (skillLevel:string,skill:any) => {
        if (answer_options.hasOwnProperty(skillLevel)) {
            const newValue = answer_options[skillLevel];
            const updatedanswer = { ...answers, [skill]: newValue }; // Update the value for the specified skill
            
            setanswers(updatedanswer);
            console.log(updatedanswer);
        }
        
        
        //state management
    };

    // Get the current question based on the index, if questions exist
    const currentQuestion = questions && questions[currentQuestionIndex];

    return (
        <>
        
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.heading}>
                    <h2>DISCOVER YOUR POSSIBLE CAREER PATH</h2>
                </div>
                <div className={style.progressWrapper}>
                <div className={style.questionNumber}>Question {currentQuestionIndex + 1}</div>
                <div className={style.progress}>
                </div>
            </div>
                {currentQuestion && (
                    <p className={style.secondText}>{currentQuestion.questionText}</p>
                )}
            </div>
            <div className={style.answers}>
                {Object.keys(answer_options).map((answer, index) => (
                    <div
                        key={index}
                        className={style.answer}
                        onClick={() => handleSelectanswer(answer)}
                    >
                        <p>{answer}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}
