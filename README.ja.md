# 空間理解デモ

Google の Gemini AI を使用した高度な空間理解機能を実証するウェブアプリケーションです。このアプリは画像を分析し、さまざまな視覚化手法でオブジェクトや空間的特徴を検出します。

## 機能

- **複数の検出モード**：
  - **2Dバウンディングボックス**：標準的な矩形オブジェクト検出
  - **セグメンテーションマスク**：ピクセルレベルのオブジェクトセグメンテーション
  - **3Dバウンディングボックス**：回転パラメータ付き3Dオブジェクト検出
  - **ポイント**：ポイントベースのオブジェクト識別

- **インタラクティブUI**：画像上に検出結果をリアルタイムで視覚化
- **柔軟な入力**：サンプル画像またはカスタム画像アップロードに対応
- **温度制御**：AIモデルの創造性/ランダム性を調整
- **レスポンシブデザイン**：デスクトップとモバイルデバイスに対応

## 技術スタック

- **フロントエンドフレームワーク**：React 19 + TypeScript
- **ビルドツール**：Vite
- **状態管理**：Jotai（アトミック状態管理）
- **スタイリング**：Tailwind CSS (@tailwindcss/browser)
- **AI統合**：Google Generative AI SDK (Gemini)
- **追加ライブラリ**：
  - perfect-freehand（スムーズな描画）
  - react-resize-detector（レスポンシブレイアウト）

## 前提条件

- Node.js（v18以上）
- npm または yarn
- Google Gemini API キー

## インストール

1. リポジトリのクローン：
   ```bash
   git clone https://github.com/yourusername/spatial-understanding.git
   cd spatial-understanding
   ```

2. 依存関係のインストール：
   ```bash
   npm install
   ```

3. ルートディレクトリに `.env.local` ファイルを作成し、Gemini API キーを追加：
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

## 開発

開発サーバーの起動：
```bash
npm run dev
```

アプリは `http://localhost:5173` で利用可能になります

## 利用可能なスクリプト

- `npm run dev` - 開発サーバーの起動
- `npm run build` - プロダクションビルド
- `npm run preview` - プロダクションビルドのプレビュー
- `npm run lint` - ESLintでコード品質チェック
- `npm run lint:fix` - ESLintの問題を自動修正
- `npm run typecheck` - TypeScript型チェックの実行

## 使用方法

1. **検出モードの選択**：利用可能な検出タイプから選択（2Dボックス、セグメンテーション、3Dボックス、またはポイント）
2. **画像の選択**：サンプル画像から選択するか、独自の画像をアップロード
3. **検出の実行**：検出ボタンをクリックして画像を分析
4. **結果の表示**：画像上に視覚化された検出オブジェクトを確認
5. **設定の調整**：温度スライダーを微調整して異なる結果を取得

## URLパラメータ

URLハッシュパラメータを使用して特定の検出モードに直接アクセスできます：
- `#task=2d-bounding-boxes`
- `#task=segmentation-masks`
- `#task=3d-bounding-boxes`
- `#task=points`

## プロジェクト構造

```
spatial-understanding/
├── App.tsx              # メインアプリケーションコンポーネント
├── atoms.tsx            # Jotai状態アトム
├── Types.tsx            # TypeScript型定義
├── Content.tsx          # 画像表示と結果の視覚化
├── Prompt.tsx           # Gemini AI統合
├── DetectTypeSelector.tsx # 検出モードセレクター
├── ExampleImages.tsx    # サンプル画像ギャラリー
├── TopBar.tsx           # アプリケーションヘッダー
├── SideControls.tsx     # コントロールパネル
└── ...その他のコンポーネント
```

## API統合

このアプリケーションは画像分析に Google の Gemini AI API を使用しています。API キーは環境変数から安全に読み込まれ、`Prompt.tsx` コンポーネントで Generative AI クライアントの初期化に使用されます。

## 貢献方法

1. リポジトリをフォーク
2. フィーチャーブランチを作成（`git checkout -b feature/amazing-feature`）
3. 変更をコミット（`git commit -m 'Add some amazing feature'`）
4. ブランチにプッシュ（`git push origin feature/amazing-feature`）
5. プルリクエストを作成

## ライセンス

このプロジェクトは Apache License 2.0 のもとでライセンスされています - 詳細は [LICENSE](LICENSE) ファイルを参照してください。

## 謝辞

- Google の Generative AI 技術で構築
- コンピュータビジョンと空間理解の進歩に触発されて開発