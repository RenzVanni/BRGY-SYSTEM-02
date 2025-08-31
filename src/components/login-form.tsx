"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { DASHBOARD } from "@/constants/navigation";
import { useFormState, useFormStatus } from "react-dom";
import { FormEvent, useActionState, useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { login_auth } from "@/api/auth/auth";
import { instance } from "@/api/config/axios_config";
import { set } from "zod";

export function LoginForm() {
  const [state, action, loading] = useActionState(login_auth, undefined);
  const { pending } = useFormStatus();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const loginAuth = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const response = await fetch(
        "http://localhost:8222/api/v1/accounts/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username,
            password,
          }),
          credentials: "include",
        }
      );

        setIsLoading(true);

      if (response.ok) {
        router.push(DASHBOARD);
      }
    } catch (error) {
      console.log("Login error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (state) {
      console.log("State: ", state);
    }
  }, [state]);
  return (
    <Card className="w-[50%] border-none">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Login</CardTitle>
        <CardDescription className="text-center">
          Enter your username below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={loginAuth}>
          <div className="grid gap-4">
            {/* <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="m@example.com"
                required
              />
            </div>
            {state?.errors?.email && <p>{state?.errors?.email}</p>} */}

            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="username"
                name="username"
                placeholder="Username"
                required
              />
            </div>
            {state?.errors?.username && <p>{state?.errors?.username}</p>}

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" name="password" required />
            </div>
            {state?.errors?.password && (
              <div>
                <p>Password must:</p>
                <ul>
                  {state.errors.password.map((error: string) => (
                    <li key={error}>- {error}</li>
                  ))}
                </ul>
              </div>
            )}
            {isLoading ? (
              <Button disabled type="submit" className="w-full">
                <Loader2 className="animate-spin" />
                Submitting...
              </Button>
            ) : (
              <Button type="submit" className="w-full">
                Login
              </Button>
            )}
          </div>
        </form>

        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="#" className="underline">
            Sign Up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
