# 📁 Next.js Route Groups (App Router)

Route Groups are a feature of the **Next.js App Router** that help you **organize your project** and **apply different layouts** without affecting the URL structure.

> **Important:** Route Groups do **not** appear in the browser URL.

---

# What is a Route Group?

A Route Group is simply a folder wrapped with parentheses.

```text
(auth)
(marketing)
(dashboard)
```

The folder name is **ignored** when generating routes.

---

# Without Route Groups

```text
app/
├── login/
│   └── page.tsx
├── register/
│   └── page.tsx
├── about/
│   └── page.tsx
├── contact/
│   └── page.tsx
```

### URLs

```
/login
/register
/about
/contact
```

Everything is placed in one folder, which becomes difficult to manage as the project grows.

---

# With Route Groups

```text
app/
├── (auth)/
│   ├── login/
│   │   └── page.tsx
│   └── register/
│       └── page.tsx
│
├── (marketing)/
│   ├── about/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
```

### URLs

```
/login
/register
/about
/contact
```

Notice that:

```
(auth)
(marketing)
```

do **not** appear in the URL.

---

# Example Code

## Login Page

```tsx
// app/(auth)/login/page.tsx

export default function LoginPage() {
  return <h1>Login Page</h1>;
}
```

Visit:

```
http://localhost:3000/login
```

---

## About Page

```tsx
// app/(marketing)/about/page.tsx

export default function AboutPage() {
  return <h1>About Page</h1>;
}
```

Visit:

```
http://localhost:3000/about
```

---

# Why Use Route Groups?

Imagine your project becomes large.

Instead of this:

```text
app/
├── login/
├── register/
├── forgot-password/
├── dashboard/
├── analytics/
├── users/
├── blog/
├── about/
├── pricing/
├── contact/
```

You can organize it like this:

```text
app/
├── (auth)/
│   ├── login/
│   ├── register/
│   └── forgot-password/
│
├── (dashboard)/
│   ├── dashboard/
│   ├── analytics/
│   └── users/
│
├── (marketing)/
│   ├── about/
│   ├── blog/
│   ├── pricing/
│   └── contact/
```

The URLs remain exactly the same.

---

# Using Different Layouts

One of the biggest advantages of Route Groups is applying different layouts.

Example:

```text
app/
├── (auth)/
│   ├── layout.tsx
│   ├── login/
│   └── register/
│
├── (marketing)/
│   ├── layout.tsx
│   ├── about/
│   └── contact/
```

---

## Auth Layout

```tsx
// app/(auth)/layout.tsx

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex justify-center items-center min-h-screen">
      {children}
    </main>
  );
}
```

Every page inside `(auth)` uses this layout.

---

## Marketing Layout

```tsx
// app/(marketing)/layout.tsx

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>Navbar</nav>

      {children}

      <footer>Footer</footer>
    </>
  );
}
```

Every page inside `(marketing)` automatically gets the Navbar and Footer.

---

# Rendering Example

### Visiting `/login`

```
+-----------------------+
|                       |
|       Login Page      |
|                       |
+-----------------------+
```

No Navbar or Footer.

---

### Visiting `/about`

```
+-----------------------+
|       Navbar          |
+-----------------------+

      About Page

+-----------------------+
|       Footer          |
+-----------------------+
```

---

# Common Mistake

Many developers think:

```text
(auth)
```

creates this URL:

```
/auth/login ❌
```

This is **incorrect**.

The correct URL is:

```
/login ✅
```

The `(auth)` folder is ignored by Next.js when generating routes.

---

# Route Group vs Normal Folder

| Folder    | URL           |
| --------- | ------------- |
| `auth/`   | `/auth/login` |
| `(auth)/` | `/login`      |

---

# Summary

✅ Organize large projects

✅ Keep URLs clean

✅ Apply different layouts

✅ No impact on route paths

---

# Quick Rule

| Syntax      | Purpose        | Appears in URL? |
| ----------- | -------------- | --------------- |
| `folder/`   | Normal Route   | ✅ Yes           |
| `(folder)/` | Route Group    | ❌ No            |
| `[id]/`     | Dynamic Route  | ✅ Yes           |
| `@folder/`  | Parallel Route | ❌ No            |

---

# Conclusion

Route Groups are an excellent way to keep your Next.js project clean, scalable, and maintainable. They allow you to organize related pages and assign different layouts without changing your application's URLs.
