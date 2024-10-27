"use client";
import { useEffect, useRef } from "react";
import NamesTogetherContainer from "./containers/NamesTogetherContainer";
import LoveTextContainer from "./containers/LoveTextContainer";
import PlacesContainer from "./containers/PlacesContainer";
import PhotosTogetherContainer from "./containers/PhotosTogetherContainer";
import DressCodeContainer from "./containers/DressCodeContainer";
import ParentsNamesContainer from "./containers/ParentsNamesContainer";
import SpecialMentionsContainer from "./containers/SpecialMentionsContainer";
import GiftTableContainer from "./containers/GiftTableContainer";
import FilterContainer from "./containers/FilterContainer";
import GoogleCalendarContainer from "./containers/GoogleCalendarContainer";
import GalleryContainer from "./containers/GalleryContainer";
import FormConfirmationContainer from "./containers/FormConfirmationContainer";
import NochildrenContainer from "./containers/NochildrenContainer";
import ContactContainer from "./containers/ContactContainer";
import AccommodationsContainer from "./containers/AccommodationsContainer";
import MusicContainer from "./containers/MusicContainer";

export default function Page() {
  

    return (
        <main className="bg-[#f2f0f1]">
            <NamesTogetherContainer />
            <LoveTextContainer />
            <PhotosTogetherContainer />
            <PlacesContainer />
            <DressCodeContainer />
            <ParentsNamesContainer />
            <SpecialMentionsContainer />
            <GalleryContainer />
            <FormConfirmationContainer/>
            <GiftTableContainer />
            <FilterContainer />
            <GoogleCalendarContainer />
            <AccommodationsContainer />
            <ContactContainer />
            <NochildrenContainer />
            <MusicContainer/>
        </main>
    );
}
