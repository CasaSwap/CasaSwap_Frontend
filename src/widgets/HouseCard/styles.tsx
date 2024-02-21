import styled from "styled-components";
import { Image } from "@/components/Image";
import InternalLink from "@/components/Links";

export const UserAvatar = styled(Image)`
  border-radius: 50%;
  border: 1px solid white;
  overflow: hidden;
`;

export const Badge = styled(Image)`
  position: absolute;
  right: -8px;
  bottom: -15px;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

export const HouseImageWrapper = styled.div`
  position: relative;
  width: fit-content;
`;

export const LinkWrapper = styled(InternalLink)`
  overflow: hidden;
  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const CardWrapper = styled.div`
  max-width: 260px;
  width: 100%;
`;

export const InfoWrapper = styled.div`
  background-color: white;
  padding: 10px 10px 5px 10px;
`;
