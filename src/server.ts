import { PartyKitServer } from "partykit/server";
import { onConnect } from "y-partykit";

export default {
  onConnect(conn, room, _ctx) {
    return onConnect(conn, room);
  },
} satisfies PartyKitServer;
