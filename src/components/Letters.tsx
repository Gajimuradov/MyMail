import React from "react";
import { emails } from '../data';
import { AllLetters, OneLetter, FirstBlock, SecondBlock, FileBlock, CountFiles, File, UploadButton } from "./styles/Letters.styled";
import { UploadIcon } from "@eisgs/icon";

export default function Letters(): JSX.Element {
  return (
    <AllLetters>
      {emails.map((thing) => (
        <OneLetter key={thing.id}>
        
          <FirstBlock>
            <input type="checkbox"/>
            <img src={thing.icon} alt="icon" />
            <span>{thing.name} </span>
          </FirstBlock>

          <SecondBlock>
            <input type="radio" checked={thing.watched}/>
            <span>{thing.title}</span>
            <p>{thing.text}</p>
          </SecondBlock>

          
          {thing.attachments && thing.attachments.length > 0 && (
            <FileBlock>
              <File>{thing.attachments[0].fileName}</File>
              <div>
                <CountFiles>{thing.attachments.length}</CountFiles>
                <UploadButton><UploadIcon></UploadIcon></UploadButton>
              </div>
            </FileBlock>
          )}

        </OneLetter>
      ))}
    </AllLetters>
  );
}

