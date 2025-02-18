import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const AvatarComponent = ({
  src,
  alt,
  fallbackText,
  className = "h-24 w-24"
}: {
  src: string;
  alt: string;
  fallbackText: string;
  className?: string;
}) => {
  return (
    <Avatar className={className}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallbackText}</AvatarFallback>
    </Avatar>
  );
};
