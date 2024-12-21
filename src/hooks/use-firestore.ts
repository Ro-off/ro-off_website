import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import { SkillRecord, ProjectRecord } from "@/types";

export function useSkillRecords() {
  const [record, setRecord] = useState({
    isLoading: true,
    value: [],
  } as SkillRecord);
  useEffect(() => {
    const fetchSkills = async () => {
      const skillsCollection = collection(db, "skills");
      const skillsSnapshot = await getDocs(skillsCollection);
      const skillsList = skillsSnapshot.docs
        .map((doc) => {
          const data = doc.data();
          if (
            typeof data.imageSrc === "string" &&
            typeof data.title === "string"
          )
            return {
              imageSrc: data.imageSrc,
              title: data.title,
              id: doc.id,
            };
          else console.error("Invalid skill data", data);
          return null;
        })
        .filter((doc) => doc !== null);
      console.log("requesting skills");
      setRecord({ isLoading: false, value: skillsList ? skillsList : [] });
    };
    fetchSkills();
  }, []);

  return record;
}

export function useProjectRecords() {
  const [record, setRecord] = useState({
    isLoading: true,
    value: [],
  } as ProjectRecord);
  useEffect(() => {
    const fetchProjects = async () => {
      const projectsCollection = collection(db, "projects");
      const projectsSnapshot = await getDocs(projectsCollection);
      const projectsList = projectsSnapshot.docs
        .map((doc) => {
          const data = doc.data();
          if (
            typeof data.title === "string" &&
            typeof data.description === "string" &&
            typeof data.sourceSrc === "string" &&
            typeof data.imageSrc === "string" &&
            Array.isArray(
              data.techList && data.techList.length > 0 && data.techList
            )
          )
            return {
              title: data.title,
              description: data.description,
              previewSrc: data.previewSrc,
              sourceSrc: data.sourceSrc,
              imageSrc: data.imageSrc,
              id: doc.id,
              techList: data.techList,
            };
          console.error("Invalid project data", data);
          return null;
        })
        .filter((doc) => doc !== null);
      console.log("requesting projects");
      setRecord({ isLoading: false, value: projectsList ? projectsList : [] });
    };
    fetchProjects();
  }, []);

  return record;
}
