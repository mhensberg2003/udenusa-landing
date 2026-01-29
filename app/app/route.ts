import { NextRequest, NextResponse } from "next/server";

const ANDROID_STORE_URL =
  "https://play.google.com/store/apps/details?id=dk.vocatastudio.UdenUSA";
const IOS_STORE_URL = "https://apps.apple.com/us/app/nonusa/id6742805777";
const WEB_APP_URL = "https://app.udenusa.dk/";

const isAndroidUserAgent = (userAgent: string) => /Android/i.test(userAgent);
const isIosUserAgent = (userAgent: string) => /iPhone|iPad|iPod/i.test(userAgent);

export const GET = (request: NextRequest) => {
  const userAgent = request.headers.get("user-agent") ?? "";

  if (isAndroidUserAgent(userAgent)) {
    return NextResponse.redirect(ANDROID_STORE_URL, { status: 302 });
  }

  if (isIosUserAgent(userAgent)) {
    return NextResponse.redirect(IOS_STORE_URL, { status: 302 });
  }

  return NextResponse.redirect(WEB_APP_URL, { status: 302 });
};
