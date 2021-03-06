import { parseISO } from "date-fns";
import ConvertToPtBrDate from "./ConvertToPtBrDate";
import ConvertDurationToTimeString from "./ConvertDurationToTimeString";

import { IEpisode, IEpisodeApi } from "../interfaces/Episode";

export default function CreateEpisodeFromApi( episode: IEpisodeApi ) {
    const { published_at: date, ...rest } = episode;
    const { url, duration } = episode.file;

    const base = {} as IEpisode;

    base.publishedAt = ConvertToPtBrDate( parseISO( date ), 'd MMM yy' );
    base.publishedAtAsTime = date;
    base.url = url;
    base.duration = duration;
    base.durationAsString = ConvertDurationToTimeString( duration );

    const ep = Object.assign(rest, base) as IEpisode;

    return ep;
}