<<<<<<< HEAD
import { Component, Match, Switch, createSignal } from "solid-js";
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardSubtitle,
  CardTitle,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
} from "@gothammm/hati";
import {
  AlertCircle,
  AlertTriangle,
  Loader2,
  Mail,
  Moon,
  Save,
  Sun,
  Terminal,
} from "lucide-solid";
import { PreviewContainer } from "./components/PreviewContainer";
import { applyTheme } from "../lib/util";
import { TabsPreview } from "./components/TabsPreview";
import { DialogPreview } from "./components/DialogPreview";
=======
import { Routes, Route } from "@solidjs/router";
import { Header } from "./components/header";
import { Home } from "./pages/home";
>>>>>>> replace new site with old

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/button" component={() => "Hello"} />
        <Route path="/" component={Home} />
        <Route
          path="/about"
          element={<div>This site was made with Solid</div>}
        />
      </Routes>
    </>
  );
}
