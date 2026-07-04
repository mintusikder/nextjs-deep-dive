import React from "react";

const layout = ({
  children,
  analytics,
  team,
}: Readonly<{
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}>) => {
  return (
    <div>
      
      {children}
      <div className="flex justify-around p-10">
        {team}
      {analytics}
      </div>
    </div>
  );
};

export default layout;
