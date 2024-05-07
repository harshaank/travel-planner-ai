"use client";

import SectionWrapper from "@/components/sections/SectionWrapper";
import EditList from "@/components/Shared/EditList";
import HeaderWithEditIcon from "@/components/Shared/HeaderWithEditIcon";
import List from "@/components/Shared/List";
import {Button} from "@/components/ui/button";
import {Skeleton} from "@/components/ui/skeleton";
import {api} from "@/convex/_generated/api";
import {Doc} from "@/convex/_generated/dataModel";
import {useMutation} from "convex/react";
import {PencilIcon, PlusIcon, Sailboat} from "lucide-react";
import {useState} from "react";

type TopActivitiesProps = {
  activities: string[] | undefined;
  planId: string;
  isLoading: boolean;
};

export default function TopActivities({activities, planId, isLoading}: TopActivitiesProps) {
  const [editMode, setEditMode] = useState(false);
  const updateActivities = useMutation(api.plan.updateActivitiesToDo);

  const handleToggleEditMode = () => {
    setEditMode(!editMode);
  };

  const updateActivitiesToDo = (updatedArray: string[]) => {
    updateActivities({
      planId: planId as Doc<"plan">["_id"],
      adventuresactivitiestodo: updatedArray,
    }).then(() => {
      handleToggleEditMode();
    });
  };

  return (
    <SectionWrapper id="topactivities">
      <HeaderWithEditIcon
        editMode={editMode}
        handleToggleEditMode={handleToggleEditMode}
        hasData={activities != null && activities.length != 0}
        icon={<Sailboat className="mr-2" />}
        title="Top activities to look for"
      />
      {!isLoading && activities ? (
        <div className="ml-8">
          {editMode ? (
            <EditList
              arrayData={activities}
              handleToggleEditMode={handleToggleEditMode}
              updateData={updateActivitiesToDo}
            />
          ) : (
            <List list={activities} />
          )}
        </div>
      ) : (
        <Skeleton className="w-full h-full" />
      )}
    </SectionWrapper>
  );
}
