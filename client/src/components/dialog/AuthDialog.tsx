"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
  import { Input } from "../ui/input";
  import { Button } from "../ui/button";
  import { useState } from "react";
  
  export default function AuthDialog({
    open,
    setOpen,
  }: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) {
    const [step, setStep] = useState<"email" | "login" | "signup">("email");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
  
    const handleContinue = async () => {
      if (!email) return;
  
      setLoading(true);
  
      // Simulate backend check
      await new Promise((res) => setTimeout(res, 1000));
  
      const emailExists = email === "existing@example.com"; // TODO: Replace with real API call
      setStep(emailExists ? "login" : "signup");
      setLoading(false);
    };
  
    const reset = () => {
      setStep("email");
      setEmail("");
      setPassword("");
      setName("");
    };
  
    const renderEmailStep = () => (
      <>
        <span>
          Check out more easily and access your tickets on any device with your
          account.
        </span>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="font-bold mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <Button
          onClick={handleContinue}
          disabled={!email || loading}
          className="w-full"
        >
          {loading ? "Checking..." : "Continue with Email"}
        </Button>
      </>
    );
  
    const renderLoginStep = () => (
      <>
        <span className="font-bold mb-2 block">{email}</span>
        <Button
          variant="ghost"
          className="text-sm text-blue-600 font-bold p-0 hover:bg-transparent"
          onClick={() => setStep("email")}
        >
          Change
        </Button>
        <label className="font-bold text-md block">
          Enter your password to continue
        </label>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="w-full">Log In</Button>
      </>
    );
  
    const renderSignupStep = () => (
      <>
        <span className="font-bold mb-2 block">{email}</span>
        <Button
          variant="ghost"
          className="text-sm text-blue-600 font-bold p-0 hover:bg-transparent hover:text-blue-900"
          onClick={() => setStep("email")}
        >
          Change
        </Button>
        <Input
          type="text"
          placeholder="Full Name"
          value={name}
          className="font-bold"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="password"
          className="font-bold"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="w-full">Create Account</Button>
      </>
    );
  
    return (
      <Dialog
        open={open}
        onOpenChange={(val) => {
          setOpen(val);
          if (!val) reset();
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-2 text-center">
              {step === "email"
                ? "Log in or Sign up"
                : step === "login"
                ? "Welcome back !"
                : "Create your account"}
            </DialogTitle>
            <DialogDescription className="space-y-4">
              {step === "email" && renderEmailStep()}
              {step === "login" && renderLoginStep()}
              {step === "signup" && renderSignupStep()}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }