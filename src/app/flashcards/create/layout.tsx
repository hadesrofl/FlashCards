import { CommonLayoutProps } from "@app/layout";
import CenteredBox from "@components/CenteredBox";
import AppBarContainer from "@components/navigation/AppBarContainer";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";

export default function FlashCardCreatePageLayout({
  children,
}: CommonLayoutProps) {
  return (
    <Stack className="w-full">
      <AppBarContainer />
      <CenteredBox width="screen">
        <Card className="p-8">{children}</Card>
      </CenteredBox>
    </Stack>
  );
}
