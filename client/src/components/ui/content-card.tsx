import { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";

interface ContentCardProps {
  title: string;
  children: ReactNode;
  showContactButton?: boolean;
  contactButtonText?: string;
  onContactClick?: () => void;
  className?: string;
}

export function ContentCard({
  title,
  children,
  showContactButton = false,
  contactButtonText = "Contact Us",
  onContactClick,
  className = ""
}: ContentCardProps) {
  return (
    <Card className={`bg-white shadow-lg rounded-xl border-0 ${className}`}>
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2 mb-2">
          <Trophy className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-semibold text-gray-800">ONE FOR ALL Coaching</span>
        </div>
        <h2 className="text-xl font-bold text-gray-900 leading-tight">
          {title}
        </h2>
      </CardHeader>
      <CardContent className="space-y-4">
        {children}
        {showContactButton && (
          <Button 
            className="w-full bg-gray-200 text-gray-800 hover:bg-gray-300 font-semibold"
            onClick={onContactClick}
          >
            {contactButtonText}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

interface ImagePlaceholderProps {
  className?: string;
  icon?: ReactNode;
}

export function ImagePlaceholder({ className = "", icon }: ImagePlaceholderProps) {
  return (
    <div className={`w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center ${className}`}>
      {icon || <div className="w-12 h-12 bg-gray-300 rounded-lg" />}
    </div>
  );
}

interface SessionTypeProps {
  icon: ReactNode;
  label: string;
}

export function SessionType({ icon, label }: SessionTypeProps) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2">
        {icon}
      </div>
      <span className="text-xs font-medium text-gray-700">{label}</span>
    </div>
  );
}