interface ServerResponse {
  line: number;
  stop: string;
  order: number;
  time: string;
}

export type ServerResponseModel = ServerResponse[];
