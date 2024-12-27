import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const AvatarComponent = ({
	src,
	alt,
	fallbackText,
}: { src: string; alt: string; fallbackText: string }) => {
	return (
		<Avatar className="h-24 w-24">
			<AvatarImage src={src} alt={alt} />
			<AvatarFallback>{fallbackText}</AvatarFallback>
		</Avatar>
	);
};
