import React, { useState } from "react";
import JournalPublications from "./Cards_JournalPublications";
import PublishedConferencePapers from "./Cards_PublishedConferencePaper";
import InvitedTalks from "./Cards_InvitedTalks";
import Miscellaneous from "./Cards_Miscellaneous";
import Books from "./Cards_Books";

const PublicationsScreen = () => {
  return (
    <>
      <JournalPublications />
      <PublishedConferencePapers />
      <InvitedTalks />
      <Books />
      <Miscellaneous />
    </>
  );
};

export default PublicationsScreen;
