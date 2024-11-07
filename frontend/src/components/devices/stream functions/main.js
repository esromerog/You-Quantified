import React, { useEffect, useState } from "react";

import { connectMuse } from "./muse";
import { connectEmotiv } from "./emotiv";
import { connectFace } from "./face";
import { connectPose } from "./pose";
import { connectVHeartRate } from "./vheartrate";
import { connectAudioRMS } from "./rms";
import { connectLSL } from "./lsl";
import { connectFaceSync } from "./face_sync";
import { connectVoiceEmotion} from "./voiceEmotion";

const connectionText = {
  disconnected: { text: "", type: "" },
  awaiting: { text: "", type: "text-warning" },
  connected: { text: " ", type: "text-success" },
  failed: { text: "Unable to connect", type: "text-danger" },
  lost: { text: "Connection lost", type: "text-danger" },
};

const disabledStatus = {
  disconnected: false,
  awaiting: true,
  connected: true,
  failed: false,
  lost: false,
};

export const deviceConnectionFunctions = {
  "Muse": connectMuse,
  "LSL": connectLSL,
  "EMOTIV": connectEmotiv,
  "Face": connectFace,
  "Video Heart Rate": connectVHeartRate,
  "AudioVolume": connectAudioRMS,
  "Face Synchronicity": connectFaceSync,
  "Pose Detection": connectPose,
  "Voice Emotion": connectVoiceEmotion,
};