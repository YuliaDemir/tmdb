export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  closeOnOverlayClick?: boolean;
};

export type FilmInfoProps = {
  year: string | undefined;
  runtime: string | null;
  rating: string | null;
  votes: string | null;
};
