import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * SNS共有時に使われるOGP画像。next/ogのデフォルトフォントは日本語グリフを持たないため、
 * ここでは欧文のみで構成し、ブランドカラー(鉄色/オフホワイト/深緑)で世界観を伝える。
 * （①〜④のopengraph-image.tsxと同じ方針。CLAUDE.md Phase 5品質チェック対応）
 */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f3ef",
          color: "#3a332c",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 6,
            color: "#4b6b4f",
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          Construction Co., Ltd.
        </div>
        <div style={{ display: "flex", fontSize: 88, letterSpacing: 2 }}>Mirai Koumuten</div>
        <div style={{ marginTop: 40, width: 120, height: 1, backgroundColor: "#4b6b4f" }} />
        <div style={{ fontSize: 22, marginTop: 32, color: "#5c544a" }}>
          Concept Project by SakuyaLabs
        </div>
      </div>
    ),
    size,
  );
}
