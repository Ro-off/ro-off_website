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
      const skillsList = skillsSnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          imageSrc: data.imageSrc,
          title: data.title,
          id: doc.id,
        };
      });
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
      const projectsList = projectsSnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          title: data.title,
          description: data.description,
          previewSrc: data.previewSrc ? data.previewSrc : null,
          sourceSrc: data.sourceSrc ? data.sourceSrc : null,
          imageSrc: data.imageSrc,
          id: doc.id,
          techList: data.techList,
        };
      });
      console.log("requesting projects");
      setRecord({ isLoading: false, value: projectsList ? projectsList : [] });
    };
    fetchProjects();
  }, []);

  return record;
}
