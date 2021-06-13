import { CircularProgress } from "material-ui"
import React, { useCallback, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getAllGists } from "../store/gists"
import {
  selectGists,
  selectGistsError,
  selectGistsLoading,
} from "../store/selectors"
import { Home } from "./Home"

export const GistsList = () => {
  const dispatch = useDispatch()
  const gists = useSelector(selectGists)
  const error = useSelector(selectGistsError)
  const loading = useSelector(selectGistsLoading)

  const requestGists = useCallback(() => {
    dispatch(getAllGists())
  }, [dispatch])

  useEffect(() => {
    dispatch(getAllGists())
  }, [dispatch])

  if (loading) {
    return <CircularProgress />
  }

  if (error) {
    return (
      <>
        <h3>Error</h3>
        <button onClick={requestGists}>Retry</button>
      </>
    )
  }

  return (
    <>
      <Home />
      <ul>
        {gists.map((gist) => (
          <li key={gist.id}>{gist.description}</li>
        ))}
      </ul>
    </>
  )
}
