import { Autocomplete, TextField } from '@mui/material';
import { Stack } from '@mui/material';
function OriginStep() {
    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },]

    return (
        <Stack className='dimensionsRow'>
            <Autocomplete
                disablePortal
                options={top100Films}
                sx={{width:'200px'}}
                renderInput={(params) => <TextField {...params} label="Select Country" />}
            />
        </Stack>
    )
}
export default OriginStep