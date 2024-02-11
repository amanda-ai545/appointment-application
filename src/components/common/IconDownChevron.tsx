import {FC} from "react";

interface Props {
  color?: string;
}

export const IconDownChevron: FC<Props> = ({color = `black`}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M5.34582 7.50385C5.26856 7.58095 5.20727 7.67252 5.16545 7.77333C5.12364 7.87415 5.10211 7.98221 5.10211 8.09135C5.10211 8.2005 5.12364 8.30856 5.16545 8.40938C5.20727 8.51019 5.26856 8.60176 5.34582 8.67885L9.17082 12.5039C9.24791 12.5811 9.33948 12.6424 9.4403 12.6842C9.54111 12.726 9.64918 12.7476 9.75832 12.7476C9.86746 12.7476 9.97552 12.726 10.0763 12.6842C10.1771 12.6424 10.2687 12.5811 10.3458 12.5039L14.1708 8.67885C14.248 8.6017 14.3092 8.51011 14.3509 8.40931C14.3927 8.3085 14.4142 8.20046 14.4142 8.09135C14.4142 7.98225 14.3927 7.87421 14.3509 7.7734C14.3092 7.6726 14.248 7.58101 14.1708 7.50385C14.0937 7.4267 14.0021 7.3655 13.9013 7.32375C13.8005 7.28199 13.6924 7.2605 13.5833 7.2605C13.4742 7.2605 13.3662 7.28199 13.2654 7.32375C13.1646 7.3655 13.073 7.4267 12.9958 7.50385L9.75415 10.7372L6.52082 7.50385C6.19582 7.17885 5.66248 7.18719 5.34582 7.50385Z"
        fill={color}
      />
    </svg>
  );
};
