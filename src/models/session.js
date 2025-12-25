import { Schema } from 'mongoose';
import { model } from 'mongoose';

export const sessionSchema = new Schema(
  {
    // userId:;
    accessToken: { type: String, required: true },
    refreshToken: { type: String, required: true },
    accessTokenValidUntil: { type: Date, required: true },
    refreshTokenValidUntil: { type: Date, required: true },
  },
  { timestamps: true, versionKey: false },
);

export const Session = model('sessions', sessionSchema);
