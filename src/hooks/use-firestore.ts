import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import { SkillRecord } from "@/types";

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
