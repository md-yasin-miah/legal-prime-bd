import type { IconType } from "react-icons";
import {
  MdAccountBalance,
  MdAccountBalanceWallet,
  MdArrowForward,
  MdBalance,
  MdBusinessCenter,
  MdCalendarMonth,
  MdCall,
  MdChat,
  MdCheckCircle,
  MdChevronRight,
  MdCorporateFare,
  MdDiversity1,
  MdDomainVerification,
  MdExpandMore,
  MdGavel,
  MdLocationOn,
  MdMail,
  MdPerson,
  MdPolicy,
  MdReceiptLong,
  MdSend,
  MdVerified,
  MdVerifiedUser,
} from "react-icons/md";

const iconMap = {
  balance: MdBalance,
  call: MdCall,
  arrow_forward: MdArrowForward,
  calendar_month: MdCalendarMonth,
  chat: MdChat,
  verified: MdVerified,
  verified_user: MdVerifiedUser,
  receipt_long: MdReceiptLong,
  corporate_fare: MdCorporateFare,
  domain_verification: MdDomainVerification,
  chevron_right: MdChevronRight,
  expand_more: MdExpandMore,
  check_circle: MdCheckCircle,
  account_balance: MdAccountBalance,
  business_center: MdBusinessCenter,
  gavel: MdGavel,
  diversity_1: MdDiversity1,
  person: MdPerson,
  account_balance_wallet: MdAccountBalanceWallet,
  policy: MdPolicy,
  location_on: MdLocationOn,
  mail: MdMail,
  send: MdSend,
} satisfies Record<string, IconType>;

export type LandingIconName = keyof typeof iconMap;

type LandingIconProps = Readonly<{
  name: LandingIconName | string;
  className?: string;
}>;

export function LandingIcon({ name, className }: LandingIconProps) {
  const Icon = iconMap[name as LandingIconName];

  if (!Icon) {
    return null;
  }

  return <Icon aria-hidden className={className} />;
}
